export default {
    fetchSocials: () => new Promise((resolve, reject) => resolve([
        {
            name: "email",
            text: "fbaker.contact@gmail.com",
            icon: "fas fa-envelope",
            url: "mailto:fbaker.contact@gmail.com"
        },
        {
            name: "github",
            text: "",
            icon: "fab fa-github",
            url: "https://github.com/f-baker"
        },
        {
            name: "linkedin",
            text: "",
            icon: "fab fa-linkedin-in",
            url: "https://www.linkedin.com/in/fbaker/en"
        },

    ]))
}
