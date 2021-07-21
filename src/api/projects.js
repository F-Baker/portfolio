export default {
    fetchProjects: () => new Promise((resolve, reject) => resolve([
        {
            id: "spring",
            name: "Montblanc.edu ",
            subtitle: "Role-based authentication with JWT",
            description:
                "This is a project I created during my last internship.  " +
                "It uses JWT to secure data passed to the backend implemented in Spring Boot and MySQL.  " +
                "This is a basic facade/N-tier application where concerns, in this case user/admin accounts, are delegated to separate services.  " +
                "It has an email confirmation system using a unique token with an expiration date." +
                "The upcoming functionality for this project is a password reset function using the same system as registration.",
            links: [{url: "https://github.com/F-Baker/montblanc", name: "Open Project", icon: "fab fa-github"}],
            secondaryLinks: [{}],
            labels: ["fullstack"],
            imgSmall: "https://firebasestorage.googleapis.com/v0/b/fbaker-portfolio.appspot.com/o/mbe.png?alt=media&token=dd62bbb1-9bf0-4183-9945-1eb18bae6898",
            img: "https://firebasestorage.googleapis.com/v0/b/fbaker-portfolio.appspot.com/o/mbe.png?alt=media&token=dd62bbb1-9bf0-4183-9945-1eb18bae6898",
            highlight: false
        },
        {
            id: "react",
            name: "React",
            subtitle: "Personal website",
            description:
                "This site was made using React and Redux with a CI pipeline implemented via GitLab.  " +
                "Redux handles the population of the projects and social media links. GitLab is configured to build and deploy this app to firebase.  " +
                "All the image content was arranged personally and hosted via firebase storage. ",
            links: [
                {url: "https://gitlab.com/F-Baker/portfolio", name: "Open project", icon: "fab fa-gitlab"},
            ],
            secondaryLinks: [{}],
            labels: ["frontend", "devops"],
            imgSmall: "https://firebasestorage.googleapis.com/v0/b/fbaker-portfolio.appspot.com/o/react-javascript_524_256.png?alt=media&token=216ea4fc-f15d-4cbc-a159-722734f3a658",
            img: "https://firebasestorage.googleapis.com/v0/b/fbaker-portfolio.appspot.com/o/react-javascript_1024_500.png?alt=media&token=16bd6cdb-843d-4977-bf6a-a9d754aeaba2",
            highlight: false
        },
        {
            id: "circleci",
            name: "CircleCI + Flask",
            subtitle: "CD via CircleCI deploying a flask application",
            description:
                "This project comes from the tutorial on the CircleCi website.  " +
                "I wanted to see the differences of the their configuration in comparison to GitLab CI/CD.  " +
                "It also came with a fancy badge in the readme, Neat!",
            links: [
                {url: "https://github.com/F-Baker/circleci_flask", name: "Open project", icon: "fab fa-github"},
            ],
            secondaryLinks: [{}],
            labels: ["devops"],
            imgSmall: "https://firebasestorage.googleapis.com/v0/b/fbaker-portfolio.appspot.com/o/circleci-flask.png?alt=media&token=0ff11d43-a64b-4186-9d9b-2020ca0b4703",
            img: "https://firebasestorage.googleapis.com/v0/b/fbaker-portfolio.appspot.com/o/circleci-flask.png?alt=media&token=0ff11d43-a64b-4186-9d9b-2020ca0b4703",
            highlight: false
        },
        {
            id: "spring-sec",
            name: "Spring Security + UserDetailsService",
            subtitle: "Leveraging the integrated Spring Sec services for authentication",
            description:
                "This is a project in progress aimed at using the integrated spring user interfaces instead of my own interfaces as seen in the MBE project." +
                "Currently the backend login function is implemented and I need to spin up a frontend for it.",
            links: [
                {url: "https://github.com/F-Baker/spring-jwt-auth", name: "Open project", icon: "fab fa-github"},
            ],
            secondaryLinks: [{}],
            labels: ["security", "backend"],
            imgSmall: "https://firebasestorage.googleapis.com/v0/b/fbaker-portfolio.appspot.com/o/spring-sec.png?alt=media&token=daa6cd08-898d-4059-bfa8-6b0a5a73e739",
            img: "https://firebasestorage.googleapis.com/v0/b/fbaker-portfolio.appspot.com/o/spring-sec.png?alt=media&token=daa6cd08-898d-4059-bfa8-6b0a5a73e739",
            highlight: false
        },
    ]))
};
