import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkUserExists } from '../utils/checkUser';
import { checkUser } from './Redux/UserSlice';

import { Box } from '@chakra-ui/react';
import { LoginAlert } from '../utils/alertLoginIsRequired';
import LoadingPage from '../utils/loadingPage';

const RouterGuard = ({ children }: any) => {
    const [itsLoading, setLoading] = useState(true);
    const user = useSelector((state: any) => state.user);
    const dispatch = useDispatch();
    const { data: session } = useSession();

    useEffect(() => {
        const getMyUser = async () => {
            setLoading(true);
            session?.user?.email && (await checkUserExists(session.user.email))
                ? dispatch(
                      checkUser({
                          accountType: 'social',
                          status: 'active',
                      })
                  )
                : dispatch(
                      checkUser({
                          accountType: 'social',
                          status: 'inactive',
                      })
                  );

            user.email != undefined &&
                (await checkUserExists(user.email)) &&
                dispatch(
                    checkUser({ accountType: 'normal', status: 'active' })
                );

            if (!user.email && !session?.user?.email) {
                dispatch(
                    checkUser({ accountType: undefined, status: undefined })
                );
            }
            setLoading(false);
        };
        getMyUser();
    }, [session?.user?.email, user.email]);

    return (
        <>
            {itsLoading ? (
                <LoadingPage />
            ) : user.status === 'active' ? (
                children
            ) : (
                <Box>
                    {children}
                    <LoginAlert modalOpen={true} />
                </Box>
            )}
        </>
    );
};

export default RouterGuard;
