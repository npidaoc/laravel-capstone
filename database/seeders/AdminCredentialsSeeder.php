<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class AdminCredentialsSeeder extends Seeder
{
    public function run()
    {
        DB::table('admin_credentials')->insert([
            'username' => 'admin',
            // 'password' => Hash::make('06181993'),
            'password' => '06181993',
        ]);
    }
}

