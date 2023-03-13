import { IWhatsappProvider } from "../IWhatsappProvider";


export class WhatsappApiNode implements IWhatsappProvider {

    async initInstance(key: string): Promise<any> {
        return new Promise((resolve, reject) => {
            const responseTime = Math.floor(Math.random() * 2000) + 1000;
            setTimeout(() => {
                resolve(
                    {
                        "error": false,
                        "message": "Initializing successfully",
                        "key": key,
                        "webhook": {
                            "enabled": false,
                            "webhookUrl": null
                        },
                        "qrcode": {
                            "url": "http://localhost:3333/instance/qr?key=123"
                        },
                        "browser": {
                            "platform": "Whatsapp MD",
                            "browser": "Chrome",
                            "version": "4.0.0"
                        }
                    }
                );
            }, responseTime);
        });
    }

}