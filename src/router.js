const pageRouter = [
    {
        path: '/',
        name: 'index',
        meta: {
            title: '首页'
        },
        component: (resolve) => require(['@/pages/index'], resolve)
    },{
        path: '/about_1',
        name: 'about_1',
        meta: {
            title: '企业概况'
        },
        component: (resolve) => require(['@/pages/about_1'], resolve)
    },{
        path: '/about_2',
        name: 'about_2',
        meta: {
            title: '发展历程'
        },
        component: (resolve) => require(['@/pages/about_2'], resolve)
    },{
        path: '/about_3',
        name: 'about_3',
        meta: {
            title: '企业文化'
        },
        component: (resolve) => require(['@/pages/about_3'], resolve)
    },{
        path: '/about_4',
        name: 'about_4',
        meta: {
            title: '公司战略'
        },
        component: (resolve) => require(['@/pages/about_4'], resolve)
    },{
        path: '/about_5',
        name: 'about_5',
        meta: {
            title: '企业文化'
        },
        component: (resolve) => require(['@/pages/about_5'], resolve)
    },{
        path: '/about_6',
        name: 'about_6',
        meta: {
            title: '公司荣誉'
        },
        component: (resolve) => require(['@/pages/about_6'], resolve)
    },{
        path: '/about_7',
        name: 'about_7',
        meta: {
            title: '党建工作'
        },
        component: (resolve) => require(['@/pages/about_7'], resolve)
    },{
        path: '/about_8',
        name: 'about_8',
        meta: {
            title: '社会责任'
        },
        component: (resolve) => require(['@/pages/about_8'], resolve)
    }, {
        path: '/about_9',
        name: 'about_9',
        meta: {
            title: '人才招聘'
        },
        component: (resolve) => require(['@/pages/about_9'], resolve)
    }, {
        path: '/about_10',
        name: 'about_10',
        meta: {
            title: '校园招聘'
        },
        component: (resolve) => require(['@/pages/about_10'], resolve)
    },{
        path: '/about_11',
        name: 'about_11',
        meta: {
            title: '社会招聘'
        },
        component: (resolve) => require(['@/pages/about_11'], resolve)
    },{
        path: '/zz-serve_1',
        name: 'zz-serve_1',
        meta: {
            title: '制造+服务'
        },
        component: (resolve) => require(['@/pages/zz-serve_1'], resolve)
    },{
        path: '/zz-serve_2',
        name: 'zz-serve_2',
        meta: {
            title: '制造+服务'
        },
        component: (resolve) => require(['@/pages/zz-serve_2'], resolve)
    },{
        path: '/zz-serve_3',
        name: 'zz-serve_3',
        meta: {
            title: '制造+服务'
        },
        component: (resolve) => require(['@/pages/zz-serve_3'], resolve)
    },{
        path: '/news_1',
        name: 'news_1',
        meta: {
            title: '视频新闻'
        },
        component: (resolve) => require(['@/pages/news_1'], resolve)
    },{
        path: '/news_2',
        name: 'news_2',
        meta: {
            title: '公司新闻'
        },
        component: (resolve) => require(['@/pages/news_2'], resolve)
    },{
        path: '/news_3',
        name: 'news_3',
        meta: {
            title: '集团新闻'
        },
        component: (resolve) => require(['@/pages/news_3'], resolve)
    },{
        path: '/news_4',
        name: 'news_4',
        meta: {
            title: '行业新闻'
        },
        component: (resolve) => require(['@/pages/news_4'], resolve)
    },{
        path: '/news_5',
        name: 'news_5',
        meta: {
            title: '新闻中心'
        },
        component: (resolve) => require(['@/pages/news_5'], resolve)
    },{
        path: '/news_6',
        name: 'news_6',
        meta: {
            title: '新闻详情'
        },
        component: (resolve) => require(['@/pages/news_6'], resolve)
    },{
        path: '/contact_1',
        name: 'contact_1',
        meta: {
            title: '联系我们'
        },
        component: (resolve) => require(['@/pages/contact_1'], resolve)
    },{
        path: '/kj-yf_1',
        name: 'kj-yf_1',
        meta: {
            title: '科技+研发'
        },
        component: (resolve) => require(['@/pages/kj-yf_1'], resolve)
    },{
        path: '/kj-yf_2',
        name: 'kj-yf_2',
        meta: {
            title: '建筑机械工程实验室'
        },
        component: (resolve) => require(['@/pages/kj-yf_2'], resolve)
    },{
        path: '/kj-yf_3',
        name: 'kj-yf_3',
        meta: {
            title: '研究成果专利'
        },
        component: (resolve) => require(['@/pages/kj-yf_3'], resolve)
    }
    
]
export default pageRouter