import { NextComponentType, NextPageContext } from 'next';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { checkUserExists } from '../utils/checkUser';
import { checkUser } from './Redux/UserSlice';
import { useSession } from 'next-auth/react';
import { useDispatch } from 'react-redux';

import { LoginAlert } from '../utils/alertLoginIsRequired';
import { Box, Container, Skeleton, Spinner } from '@chakra-ui/react';

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
            {itsLoading ? null : user.status === 'active' ? (
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
