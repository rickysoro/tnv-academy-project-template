import { Injectable } from "@angular/core";

export interface User {
  name?: string;
  surname?: string;
  username?: string;
  id: number;
}

export interface LoginDTO {
  username: string;
  password: string;
}

export interface RegisterDTO {
  name: string;
  surname: string;
  username: string;
  password: string;
  userId: number;
}
