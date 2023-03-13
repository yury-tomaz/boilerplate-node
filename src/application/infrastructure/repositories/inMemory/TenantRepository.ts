import { Tenant } from "../../../../domain/entities/tenant";
import { ITenantRepository } from "../../../../domain/repositories/ITenantRepository";


export class TenantRepositoryInMemory implements ITenantRepository {
    private tenants: Tenant[] = [
        {
            id: '1',
            name: 'Tenant 1',
            slug: 'tenant-1',
            email: 'tenant-1@teste.com',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            id: '2',
            name: 'Tenant 2',
            slug: 'tenant-2',
            email: 'tenant-2@teste.com',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            id: '3',
            name: 'Tenant 3',
            slug: 'tenant-3',
            email: 'tenant-3@teste.com',
            createdAt: new Date(),
            updatedAt: new Date(),
        }
    ]

    async create(tenant: Tenant): Promise<void> {
        this.tenants.push(tenant);
    }

    async findByEmail(email: string): Promise<Tenant> {
        const tenant = this.tenants.find(tenant => tenant.email === email);
        return tenant;
    }

    async findBySlug(slug: string): Promise<Tenant> {
        const tenant = this.tenants.find(tenant => tenant.slug === slug);
        return tenant;
    }

    async findById(id: string): Promise<Tenant> {
        const tenant = this.tenants.find(tenant => tenant.id === id);
        return tenant;
    }

    async delete(id: string): Promise<void> {
        const tenantIndex = this.tenants.findIndex(tenant => tenant.id === id);
        this.tenants.splice(tenantIndex, 1);
    }
}
