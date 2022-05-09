declare global {
    namespace NodeJS {
        interface ProcessEnv {
            CLIENTID: string;
        }
    }
}
export {}