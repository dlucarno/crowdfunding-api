import { OnModuleInit } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
export declare class AuthService implements OnModuleInit {
    private moduleRef;
    private jwtService;
    private usersService;
    constructor(moduleRef: ModuleRef, jwtService: JwtService);
    onModuleInit(): void;
    validateUser(email: string, password: string): Promise<import(".prisma/client").User>;
    login(user: any): Promise<{
        access_token: string;
    }>;
    register(user: CreateUserDto): Promise<{
        access_token: string;
    }>;
}
