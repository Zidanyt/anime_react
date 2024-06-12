const animes = [
    {
        id: 1,
        name: "Fullmetal Alchemist: Brotherhood (2009)",
        image: "https://www.themoviedb.org/t/p/original/1vUS6jajouERVFZXZ1dl5AECMww.jpg",
        description: "ok",
        isTop10: true,
        rating: 0,
        isNew: false
    },
    {
        id: 2,
        name: "Hunter x Hunter (2011)",
        image: "https://th.bing.com/th/id/OIP.nzx-nVOtKC7p_nOCunJ3EgAAAA?rs=1&pid=ImgDetMain",
        description: "teste",
        isTop10: true,
        rating: 0,
        isNew: false
    },
    {
        id: 3,
        name: "Bleach",
        image: "https://th.bing.com/th/id/OIP.WbV8dA1Q2PianVPxULGw-gHaEo?rs=1&pid=ImgDetMain",
        description: "teste",
        isTop10: true,
        rating: 0,
        isNew: false
    },
    {
        id: 4,
        name: "Kaguya-sama: Love Is War",
        image: "https://th.bing.com/th/id/OIP.Nd829mxHMlW-lbwpHcHUYwHaK5?pid=ImgDet&w=474&h=697&rs=1",
        description: "teste",
        isTop10: false,
        rating: 0,
        isNew: false
    },
    {
        id: 5,
        name: "Koe no Katachi",
        image: "https://i.pinimg.com/564x/a7/7b/96/a77b96c1aca02eae461a961fb46c6281.jpg",
        description: "teste",
        isTop10: false,
        rating: 0,
        isNew: false
    },
    {
        id: 6,
        name: "Shingeki no Kyojin",
        image: "https://animefans.com.br/wp-content/uploads/2018/04/shingeki-no-kyojin-poster-1.jpg",
        description: "teste",
        isTop10: false,
        rating: 0,
        isNew: false
    },
    {
        id: 7,
        name: "Kimi no Na wa",
        image: "https://th.bing.com/th/id/R.3b35183b97b277cdc8c448063b968c2f?rik=yk%2b0WXTyNWZVXw&pid=ImgRaw&r=0",
        description: "teste",
        isTop10: false,
        rating: 0,
        isNew: false
    },
    {
        id: 8,
        name: "Jujutsu Kaisen",
        image: "https://i1.wp.com/ogre.natalie.mu/media/news/comic/2020/0914/jujutsukaisen_kv2.jpg?resize=565%2C800&ssl=1",
        description: "teste",
        isTop10: false,
        rating: 0,
        isNew: false
    },
    {
        id: 9,
        name: "Mob Psycho 100",
        image: "https://th.bing.com/th/id/R.870f3b6d1d93f5b85df99e924d1f427b?rik=vuO8IRxpED22uQ&pid=ImgRaw&r=0",
        description: "teste",
        isTop10: false,
        rating: 0,
        isNew: true
    },
    {
        id: 10,
        name: "Kimetsu no Yaiba",
        image: "https://th.bing.com/th/id/OIP.hb3ZC711sjPzweshRbETmQAAAA?rs=1&pid=ImgDetMain",
        description: "teste",
        isTop10: true,
        rating: 0,
        isNew: true
    },
    {
        id: 11,
        name: "One Piece",
        image: "",
        description: "teste",
        isTop10: true,
        rating: 0,
        isNew: true
    },
    {
        id: 12,
        name: "Mushoku Tensei: Isekai Ittara Honki Dasu",
        image: "",
        description: "teste",
        isTop10: true,
        rating: 0,
        isNew: true
    },
    {
        id: 13,
        name: "Death Note",
        image: "",
        description: "teste",
        isTop10: true,
        rating: 0,
        isNew: true
    },
    {
        id: 14,
        name: "Kenpuu Denki Berserk",
        image: "",
        description: "teste",
        isTop10: true,
        rating: 0,
        isNew: true
    },
    {
        id: 15,
        name: "Kenpuu Denki Berserk",
        image: "",
        description: "teste",
        isTop10: true,
        rating: 0,
        isNew: true
    },
    {
        id: 16,
        name: "Rascal Does Not Dream of Bunny Girl Senpai",
        image: "",
        description: "teste",
        isTop10: true,
        rating: 0,
        isNew: true
    },
    {
        id: 17,
        name: "JoJo no Kimyou na Bouken",
        image: "",
        description: "teste",
        isTop10: true,
        rating: 0,
        isNew: true
    },
    {
        id: 18,
        name: "Spy x Family",
        image: "",
        description: "teste",
        isTop10: true,
        rating: 0,
        isNew: true
    },
    {
        id: 19,
        name: "One Punch Man",
        image: "",
        description: "teste",
        isTop10: true,
        rating: 0,
        isNew: true
    },
    {
        id: 20,
        name: "Keijo!!!",
        image: "",
        description: "teste",
        isTop10: true,
        rating: 0,
        isNew: true
    },
    {
        id: 21,
        name: "Kono Subarashii Sekai ni Shukufuku wo!",
        image: "",
        description: "teste",
        isTop10: true,
        rating: 0,
        isNew: true
    },
    {
        id: 22,
        name: "Re:Zero kara Hajimeru Isekai Seikatsu",
        image: "",
        description: "teste",
        isTop10: true,
        rating: 0,
        isNew: true
    },
    {
        id: 23,
        name: "Tensei shitara Slime Datta Ken",
        image: "",
        description: "teste",
        isTop10: true,
        rating: 0,
        isNew: true
    },
    {
        id: 24,
        name: "Hellsing",
        image: "",
        description: "teste",
        isTop10: true,
        rating: 0,
        isNew: true
    },
    {
        id: 25,
        name: "Dr. Stone",
        image: "",
        description: "teste",
        isTop10: true,
        rating: 0,
        isNew: true
    },
    {
        id: 26,
        name: "Boku dake ga Inai Machi",
        image: "",
        description: "teste",
        isTop10: true,
        rating: 0,
        isNew: true
    },
    {
        id: 27,
        name: "Kuroko no Basket",
        image: "",
        description: "teste",
        isTop10: true,
        rating: 0,
        isNew: true
    },
    {
        id: 28,
        name: "Boku no Hero Academia",
        image: "",
        description: "teste",
        isTop10: true,
        rating: 0,
        isNew: true
    },
    {
        id: 29,
        name: "Kobayashi-san Chi no Maid Dragon",
        image: "",
        description: "teste",
        isTop10: true,
        rating: 0,
        isNew: true
    },
    {
        id: 30,
        name: "Dororo",
        image: "",
        description: "teste",
        isTop10: true,
        rating: 0,
        isNew: true
    },
];

export default animes;
