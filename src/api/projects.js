export default {
    fetchProjects: () => new Promise( (resolve, reject) => resolve( [
        {
            id: "MessageMemorial",
            name: "Message Memorial",
            subtitle: "Keep your old messages alive on any device",
            description: "Preserve your message threads on a universal message service emulator.<br/><br/>Have you ever wanted to look at old messages from friends or loved ones?  Have you recently quit a website but want to preserve your pm's?<br/><br/>Upload your data to the app and choose the service theme.  Message Memorial will analyze your message data and create an emulation of a message service",
            links: [ {url: "#", name: "See on the Play Store", icon: "fab fa-google-play"} ],
            secondaryLinks: [ {url: "#", name: "This is where an excellent customer review will go", icon: "fas fa-external-link-alt"} ],
            labels: [ "App", "Spring", "React", "iOS", "android" ],
            imgSmall: "https://firebasestorage.googleapis.com/v0/b/fbaker-portfolio.appspot.com/o/messagememorial_524_256.png?alt=media&token=e679e716-44a7-409d-a780-1dabc21d1932",
            img: "https://firebasestorage.googleapis.com/v0/b/fbaker-portfolio.appspot.com/o/messagememorial_1024_500.png?alt=media&token=8bfaac52-a676-4ac9-8d4e-76fbb098e68d",
            highlight: true
        },
        {
            id: "spring-react-data",
            name: "Spring/React Data Persistence example",
            subtitle: "YouTube Player library for Android, stable and customizable",
            description: "The android-youtube-player library provides a simple View that can be easily integrated in every Activity/Fragment.<br/><br/>The interaction with YouTube is based on the IFrame Player API, running inside of a WebView, therefore the YouTube app is not required to be installed on the user's device.<br/><br/>The web UI of the IFrame Player player is hidden, instead a native UI built on top of Android is used to interact with the player, providing a native experience to the users.<br/><br/>The UI of the player is 100% customizable. The default UI can be changed, to show and hide new views, or can be completely replaced by a custom UI.<br/><br/>This library also provides a Chromecast YouTube player, that you can use to cast YouTube videos from your app to a Chromecast device.",
            links: [
                { url: "https://github.com/PierfrancescoSoffritti/android-youtube-player", name: "Open project", icon: "fab fa-github"},
                { url: "https://play.google.com/store/apps/details?id=com.pierfrancescosoffritti.aytplayersample", name: "Download sample app", icon: "fab fa-google-play"}
            ],
            secondaryLinks: [
                { url: "https://medium.com/@soffritti.pierfrancesco/how-to-play-youtube-videos-in-your-android-app-c40427215230", name:"android-youtube-player, introduction", icon: "fab fa-medium"},
                { url: "https://medium.com/@soffritti.pierfrancesco/customize-android-youtube-players-ui-9f32da9e8505", name:"android-youtube-player, customization", icon: "fab fa-medium"},
                { url: "https://medium.com/@soffritti.pierfrancesco/how-to-send-youtube-videos-from-your-android-app-to-a-chromecast-device-541d59ea1260", name:"android-youtube-player, chromecast", icon: "fab fa-medium"}
            ],
            labels: [ "felix", "library" ],
            imgSmall: "https://firebasestorage.googleapis.com/v0/b/personal-website-5dadd.appspot.com/o/projects%2FAndroid-YouTube-Player_small.jpg?alt=media&token=4b7d8258-80b7-4260-bec5-38a56513d525",
            img: "https://firebasestorage.googleapis.com/v0/b/personal-website-5dadd.appspot.com/o/projects%2FAndroid-YouTube-Player.jpg?alt=media&token=92c5cefa-9ee3-4b62-9e72-de875e9d5c6c",
            highlight: true
        }] ) )
}
