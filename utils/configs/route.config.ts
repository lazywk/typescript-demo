

export const routes = [
    {
        pathname: '/login',
        public: true,
        role: []
    },
    {
        pathname: '/register',
        public: true,
        role: []
    },
    {
        pathname: '/',
        role: []
    },
    {
        pathname: '/posts',
        role: []
    }
]

export const authRoutes = [
    {
        pathname: '/login',
        public: true,
        role: []
    },
    {
        pathname: '/register',
        public: true,
        role: []
    }
]

export const privateRoutes = ['/', '/posts']