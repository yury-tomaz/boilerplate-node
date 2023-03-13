
interface InstanceResponse {
    error: boolean,
    message: string,
    key: string,
    webhook: {
        enabled: boolean,
        webhookUrl: string | null
    },
    qrcode: {
        url: string
    },
    browser: {
        platform: string,
        browser: string,
        version: string
    }
}


export interface IWhatsappProvider {
    initInstance(key: string): Promise<InstanceResponse | undefined>;
}