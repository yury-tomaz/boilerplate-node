import { Session } from "../../../../domain/entities/session";
import { ISessionRepository } from "../../../../domain/repositories/ISessionRepository";


export class SessionRepository implements ISessionRepository {
    private sessions: Session[] = [];

    async create(session: Session): Promise<void> {
        this.sessions.push(session);
    }

    async findByName(name: string, tenant_id: string): Promise<Session> {
        return this.sessions.find((session) => session.name === name && session.tenant_id === tenant_id);
    }

    async findById(id: string): Promise<Session> {
        return this.sessions.find((session) => session.id === id);
    }

    async list(): Promise<Session[]> {
        return this.sessions;
    }
}