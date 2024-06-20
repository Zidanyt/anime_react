const animes = [
    {
        id: 1,
        name: "Fullmetal Alchemist: Brotherhood (2009)",
        image: "https://www.themoviedb.org/t/p/original/1vUS6jajouERVFZXZ1dl5AECMww.jpg",
        description: "baixo",
        isTop10: true,
        rating: 0,
        year: 2002,
        genre: "Ação, Aventura, Drama",    
    },
    {
        id: 2,
        name: "Hunter x Hunter (2011)",
        image: "https://th.bing.com/th/id/OIP.nzx-nVOtKC7p_nOCunJ3EgAAAA?rs=1&pid=ImgDetMain",
        description: "teste10",
        isTop10: true,
        rating: 0,
        year: 2010,
        genre: "Ação, Aventura, Drama",
        isNew: false,
    },
    {
        id: 3,
        name: "Bleach",
        image: "https://th.bing.com/th/id/OIP.WbV8dA1Q2PianVPxULGw-gHaEo?rs=1&pid=ImgDetMain",
        description: "teste",
        isTop10: true,
        rating: 0,
        year: 2009,
        genre: "Ação, Aventura, Drama",
        isNew: false
    },
    {
        id: 4,
        name: "Kaguya-sama: Love Is War",
        image: "https://th.bing.com/th/id/OIP.Nd829mxHMlW-lbwpHcHUYwHaK5?pid=ImgDet&w=474&h=697&rs=1",
        description: "teste",
        isTop10: false,
        rating: 0,
        year: 2009,
        genre: "Ação, Aventura, Drama",
        isNew: false
    },
    {
        id: 5,
        name: "Koe no Katachi",
        image: "https://steamuserimages-a.akamaihd.net/ugc/860614665756309200/114E4AC19CDB8319AE4ED681C5FD5F9DFB076B54/",
        description: "teste",
        isTop10: false,
        rating: 0,
        year: 2009,
        genre: "Ação, Aventura, Drama",
        isNew: false
    },
    {
        id: 6,
        name: "Shingeki no Kyojin",
        image: "https://animefans.com.br/wp-content/uploads/2018/04/shingeki-no-kyojin-poster-1.jpg",
        description: "teste",
        isTop10: false,
        rating: 0,
        year: 2009,
        genre: "Ação, Aventura, Drama",
        isNew: false
    },
    {
        id: 7,
        name: "Kimi no Na wa",
        image: "https://th.bing.com/th/id/R.3b35183b97b277cdc8c448063b968c2f?rik=yk%2b0WXTyNWZVXw&pid=ImgRaw&r=0",
        description: "teste",
        isTop10: false,
        rating: 0,
        year: 2009,
        genre: "Ação, Aventura, Drama",
        isNew: false
    },
    {
        id: 8,
        name: "Jujutsu Kaisen",
        image: "https://i1.wp.com/ogre.natalie.mu/media/news/comic/2020/0914/jujutsukaisen_kv2.jpg?resize=565%2C800&ssl=1",
        description: "teste",
        isTop10: false,
        rating: 0,
        year: 2009,
        genre: "Ação, Aventura, Drama",
        isNew: false
    },
    {
        id: 9,
        name: "Mob Psycho 100",
        image: "https://th.bing.com/th/id/R.870f3b6d1d93f5b85df99e924d1f427b?rik=vuO8IRxpED22uQ&pid=ImgRaw&r=0",
        description: "teste",
        isTop10: false,
        rating: 0,
        year: 2009,
        genre: "Ação, Aventura, Drama",
        isNew: true
    },
    {
        id: 10,
        name: "Kimetsu no Yaiba",
        image: "https://th.bing.com/th/id/OIP.hb3ZC711sjPzweshRbETmQAAAA?rs=1&pid=ImgDetMain",
        description: "teste",
        isTop10: true,
        rating: 0,
        year: 2009,
        genre: "Ação, Aventura, Drama",
        isNew: true
    },
    {
        id: 11,
        name: "One Piece",
        image: "https://picfiles.alphacoders.com/398/398018.jpg",
        description: "teste",
        isTop10: true,
        rating: 0,
        year: 2009,
        genre: "Ação, Aventura, Drama",
        isNew: true
    },
    {
        id: 12,
        name: "Mushoku Tensei: Isekai Ittara Honki Dasu",
        image: "https://th.bing.com/th/id/R.196c78fe9102b12ccc9cd53bac6aaf4f?rik=X4%2fYZcnqtccs2A&pid=ImgRaw&r=0",
        description: "teste",
        isTop10: true,
        rating: 0,
        year: 2009,
        genre: "Ação, Aventura, Drama",
        isNew: true
    },
    {
        id: 13,
        name: "Death Note",
        image: "https://th.bing.com/th/id/OIP.2bMZJ0CRCvFKGi7DrfgFnwHaLH?rs=1&pid=ImgDetMain",
        description: "teste",
        isTop10: true,
        rating: 0,
        year: 2009,
        genre: "Ação, Aventura, Drama",
        isNew: true
    },
    {
        id: 14,
        name: "Kenpuu Denki Berserk",
        image: "https://th.bing.com/th/id/OIP.JnquF_nIjNo9C7m9zc-ekgHaKf?w=1084&h=1536&rs=1&pid=ImgDetMain",
        description: "teste",
        isTop10: true,
        rating: 0,
        year: 2009,
        genre: "Ação, Aventura, Drama",
        isNew: true
    },
    {
        id: 15,
        name: "Rascal Does Not Dream of Bunny Girl Senpai",
        image: "https://th.bing.com/th/id/OIP.dXUHmVwzYotnnwFsa3303AHaNK?rs=1&pid=ImgDetMain",
        description: "teste",
        isTop10: true,
        rating: 0,
        year: 2009,
        genre: "Ação, Aventura, Drama",
        isNew: true
    },
    {
        id: 16,
        name: "JoJo no Kimyou na Bouken",
        image: "https://th.bing.com/th/id/OIP.EmlM0mn674SiXAn_jRRLiQHaKX?rs=1&pid=ImgDetMain",
        description: "teste",
        isTop10: true,
        rating: 0,
        year: 2009,
        genre: "Ação, Aventura, Drama",
        isNew: true
    },
    {
        id: 17,
        name: "Spy x Family",
        image: "https://th.bing.com/th/id/OIP.iicqXwqtBcjFaNq6CPr1SgHaMR?rs=1&pid=ImgDetMain",
        description: "teste",
        isTop10: true,
        rating: 0,
        year: 2009,
        genre: "Ação, Aventura, Drama",
        isNew: true
    },
    {
        id: 18,
        name: "One Punch Man",
        image: "https://th.bing.com/th/id/R.1276ae7d8bf58a0bb9ea8373f8f287b2?rik=62N1CT2HvWk%2fng&pid=ImgRaw&r=0",
        description: "teste",
        isTop10: true,
        rating: 0,
        year: 2009,
        genre: "Ação, Aventura, Drama",
        isNew: true
    },
    {
        id: 19,
        name: "Keijo!!!",
        image: "https://th.bing.com/th/id/OIP.I2hTSPIsdiJZsQ7O-mAQOQHaEK?rs=1&pid=ImgDetMain",
        description: "teste",
        isTop10: true,
        rating: 0,
        year: 2009,
        genre: "Ação, Aventura, Drama",
        isNew: true
    },
    {
        id: 20,
        name: "Kono Subarashii Sekai ni Shukufuku wo!",
        image: "https://th.bing.com/th/id/R.80393e62a8f0152d3281e283fa2ad986?rik=QL%2fzM0E2vyQvwA&pid=ImgRaw&r=0",
        description: "teste",
        isTop10: true,
        rating: 0,
        year: 2009,
        genre: "Ação, Aventura, Drama",
        isNew: true
    },
    {
        id: 21,
        name: "Re:Zero kara Hajimeru Isekai Seikatsu",
        image: "https://1.bp.blogspot.com/-Lc2btHzjAeY/YRARG6SEPCI/AAAAAAAAAAs/_sgwraIWtmgyxx49b1nWSoArE3fjOm6_QCLcBGAsYHQ/s1771/wp5978817.jpg",
        description: "teste",
        isTop10: true,
        rating: 0,
        year: 2009,
        genre: "Ação, Aventura, Drama",
        isNew: true
    },
    {
        id: 22,
        name: "Tensei shitara Slime Datta Ken",
        image: "https://th.bing.com/th/id/R.d114f4e794bd04f60a7efbb6df7af7cb?rik=%2b8%2fQq1aG%2bvYFdQ&pid=ImgRaw&r=0",
        description: "teste",
        isTop10: true,
        rating: 0,
        year: 2009,
        genre: "Ação, Aventura, Drama",
        isNew: true
    },
    {
        id: 23,
        name: "Hellsing",
        image: "https://m.media-amazon.com/images/M/MV5BZTkyNjA0YTItNTBmNC00ZjFiLTg0YWItOGQ4NGZkMmQ4NDI0XkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
        description: "teste",
        isTop10: true,
        rating: 0,
        year: 2009,
        genre: "Ação, Aventura, Drama",
        isNew: true
    },
    {
        id: 24,
        name: "Dr. Stone",
        image: "https://www.themoviedb.org/t/p/original/1liPa2ldguJFbx8X46RhdeG4VcK.jpg",
        description: "teste",
        isTop10: true,
        rating: 0,
        year: 2009,
        genre: "Ação, Aventura, Drama",
        isNew: true
    },
    {
        id: 25,
        name: "Boku dake ga Inai Machi",
        image: "https://th.bing.com/th/id/OIP.-W_288sRh-jN2kHt8QCP-AHaK8?pid=ImgDet&w=474&h=700&rs=1",
        description: "teste",
        isTop10: true,
        rating: 0,
        year: 2009,
        genre: "Ação, Aventura, Drama",
        isNew: true
    },
    {
        id: 26,
        name: "Kuroko no Basket",
        image: "https://i.pinimg.com/originals/41/02/24/41022453a7d31208e21250dbfe59ba84.jpg",
        description: "teste",
        isTop10: true,
        rating: 0,
        year: 2009,
        genre: "Ação, Aventura, Drama",
        isNew: true
    },
    {
        id: 27,
        name: "Boku no Hero Academia",
        image: "https://th.bing.com/th/id/R.63329399881180aa0fb7120b7b7d5ff2?rik=S27v%2bYi0g6vQIQ&riu=http%3a%2f%2fmetagalaxia.com.br%2fwp-content%2fuploads%2f2017%2f10%2fboku-no-hero-academia-segunda-temporada-poster.jpg&ehk=69Z7KH1XAYUCAt2Ko7Zn6But9Ka2lnAddUYjk488yDw%3d&risl=&pid=ImgRaw&r=0",
        description: "teste",
        isTop10: true,
        rating: 0,
        year: 2009,
        genre: "Ação, Aventura, Drama",
        isNew: true
    },
    {
        id: 28,
        name: "Kobayashi-san Chi no Maid Dragon",
        image: "https://pm1.narvii.com/6432/b1d5448752ee8a40aa376c5de4fb7d84f6865ed5_hq.jpg",
        description: "teste",
        isTop10: true,
        rating: 0,
        year: 2009,
        genre: "Ação, Aventura, Drama",
        isNew: true
    },
    {
        id: 29,
        name: "Dororo",
        image: "https://i.pinimg.com/736x/17/03/24/170324a9197ea1016fcfe41497f8832f.jpg",
        description: "teste",
        isTop10: true,
        rating: 0,
        year: 2009,
        genre: "Ação, Aventura, Drama",
        isNew: true
    },
    {
        id: 30,
        name: "Tokyo Ghoul",
        image: "https://i.pinimg.com/originals/b6/31/28/b6312835861c9a8bf4228c46b7dcae24.jpg",
        description: "teste",
        isTop10: true,
        rating: 0,
        year: 2009,
        genre: "Ação, Aventura, Drama",
        isNew: true
    },
];

export default animes;


// https://i.pinimg.com/originals/2b/be/83/2bbe83c41babaf761466774be9e52a13.png

// https://th.bing.com/th/id/OIP.2dcIUvkrMoyNdo02oq34pQHaF8?rs=1&pid=ImgDetMain