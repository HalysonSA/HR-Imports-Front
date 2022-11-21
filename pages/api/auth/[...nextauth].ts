import NextAuth from 'next-auth';
import FacebookProvider from 'next-auth/providers/facebook';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string,
            authorization: {
                params: {
                    access_type: 'offline',
                    authorization: {
                        params: { scope: 'openid email profile' },
                    },
                    idToken: true,
                    checks: ['pkce', 'state'],
                },
            },
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_ID as string,
            clientSecret: process.env.FACEBOOK_SECRET as string,
        }),
    ],
    secret: process.env.SECRET,
    callbacks: {
        redirect: async () => {
            return '/';
        },
    },
};

export default NextAuth(authOptions);
