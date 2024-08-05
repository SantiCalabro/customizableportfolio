<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name' =>  "Martina",
            'lastname' => 'Rugo',
            'picture' => 'path/to/picture',
            'birthdate' => '1990-01-01',
            'city' => 'Mar del Plata',
            'country' => 'Argentina',
            'profession' => 'Diseñadora',
            'about' => 'About',
            'email' => 'martinarugoo@gmail.com',
            'password' => Hash::make('securepassword'), // Asegúrate de usar una contraseña segura
        ]);
    }
}
