export default {
    fetchProjects: () => new Promise((resolve, reject) => resolve([
        {
            id: "spring",
            name: "Spring ",
            subtitle: "Example projects using the Spring suite of tools",
            description: "Here are some of the various Spring example projects I've worked on. <br/> Projects are divided into their respective categories.",
            links: [{url: "", name: "Open Project", icon: "fab fa-github"}],
            secondaryLinks: [{
                // url: "",
                // name: "This is where an excellent customer review will go",
                // icon: "fas fa-external-link-alt"
            }],
            labels: ["App", "Spring", "Examples"],
            imgSmall: "https://firebasestorage.googleapis.com/v0/b/fbaker-portfolio.appspot.com/o/spring-java_1024_500.png?alt=media&token=64148998-8f3a-45dc-9ff1-fc44026a9733",
            img: "https://firebasestorage.googleapis.com/v0/b/fbaker-portfolio.appspot.com/o/spring-java_524_256.png?alt=media&token=e81af7ab-4c49-4da5-82d3-d7bcdf978cfb",
            highlight: true
        },
        {
            id: "react",
            name: "React",
            subtitle: "Example projects using React",
            description: "Here are some projects showing the differents aspects of React that I've worked on.  ",
            links: [
                {url: "", name: "Open project", icon: "fab fa-github"},
            ],
            secondaryLinks: [
                {
                    url: "",
                    name: "",
                    icon: ""
                }
            ],
            labels: ["react", "javascript"],
            imgSmall: "https://firebasestorage.googleapis.com/v0/b/fbaker-portfolio.appspot.com/o/react-javascript_524_256.png?alt=media&token=216ea4fc-f15d-4cbc-a159-722734f3a658",
            img: "https://firebasestorage.googleapis.com/v0/b/fbaker-portfolio.appspot.com/o/react-javascript_1024_500.png?alt=media&token=16bd6cdb-843d-4977-bf6a-a9d754aeaba2",
            highlight: true
        },
        {
            id: "jenkins",
            name: "Jenkins",
            subtitle: "Product deployments via Jenkins",
            description: "Here are some of the personal projects I've worked on using Jenkins for deployment.  This site is an active example of Jenkins automation using GitHub repo and Actions.",
            links: [{url: "", name: "Open projects", icon: "fab fa-github"}],
            secondaryLinks: [{
                url: "",
                name: "",
                icon: ""
            }],
            labels: ["DevOps", "Jenkins"],
            imgSmall: "https://firebasestorage.googleapis.com/v0/b/fbaker-portfolio.appspot.com/o/jenkins-ci_512.png?alt=media&token=52257c71-fc2b-40a8-84b2-208f15bacfb1",
            img: "https://firebasestorage.googleapis.com/v0/b/fbaker-portfolio.appspot.com/o/jenkins_1024_500.png?alt=media&token=55e3b2dc-d854-4248-9aec-f01b1500096a",
            highlight: false
        },
        {
            id: "docker",
            name: "Docker",
            subtitle: "Containers for every need",
            description: "Here are some of the fun things I've done with Docker",
            links: [{url: "", name: "Open projects", icon: "fab fa-github"}],
            secondaryLinks: [{
                url: "",
                name: "",
                icon: ""
            }],
            labels: ["Docker", "DevOps"],
            imgSmall: "https://firebasestorage.googleapis.com/v0/b/fbaker-portfolio.appspot.com/o/Docker_512.png?alt=media&token=07995f85-06e6-421d-9be2-ad98697e81a0",
            img: "https://firebasestorage.googleapis.com/v0/b/fbaker-portfolio.appspot.com/o/Docker_1024.png?alt=media&token=ccb75b33-2771-4813-96bf-42ebc84b272a",
            highlight: false
        },
        {
            id: "dockermakemern",
            name: "Docker-Make-Mern",
            subtitle: "Scipted container creation",
            description: "This folder contains a make script to deploy an existing application to a container.",
            links: [{url: "https://github.com/F-Baker/docker-make-mern", name: "Repo", icon: "fab fa-github"}],
            secondaryLinks: [{
                url: "",
                name: "",
                icon: ""
            }],
            labels: ["mern"],
            imgSmall: "https://firebasestorage.googleapis.com/v0/b/fbaker-portfolio.appspot.com/o/mern_1024_500.png?alt=media&token=2eb215c6-8afc-48b4-bcc2-d3618c9112a3",
            img: "https://firebasestorage.googleapis.com/v0/b/fbaker-portfolio.appspot.com/o/mern_1024_500.png?alt=media&token=2eb215c6-8afc-48b4-bcc2-d3618c9112a3",
            highlight: false
        },
        {
            id: "trello",
            name: "Trello",
            subtitle: "This site's board",
            description: "Here's this site's kanban board.  I've implemented an abbreviated technique to make trello work",
            links: [{url: "https://trello.com/b/KEZWJEEz/portfolio", name: "Board", icon: "fab fa-trello"}],
            secondaryLinks: [{
                url: "",
                name: "",
                icon: ""
            }],
            labels: ["trello", "kanban"],
            imgSmall: "https://firebasestorage.googleapis.com/v0/b/fbaker-portfolio.appspot.com/o/trello_524_256.png?alt=media&token=f9f4f339-48aa-4603-91d8-c957abb3c8e3",
            img: "https://firebasestorage.googleapis.com/v0/b/fbaker-portfolio.appspot.com/o/trello_1024_500.png?alt=media&token=bca17fad-074d-41f2-a28c-15c127e8b066",
            highlight: false
        },
    ]))
}
