interface Config {
    apiUrl: string
}

export const config: Config = {
    // Creating a config object makes adding further resources
    // and environments more simple in the future
    apiUrl: 'https://api.chucknorris.io'
}