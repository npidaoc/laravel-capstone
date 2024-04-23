<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Users extends Model
{
    use HasFactory;

    
protected $fillable = [
    'firstName',
    'lastName',
    'phone',
    'email',
    'password',
    'username',
];
}

// namespace App\Models;

// use Illuminate\Database\Eloquent\Factories\HasFactory;
// use Illuminate\Foundation\Auth\User as Authenticatable;
// use Laravel\Passport\HasApiTokens;

// class Users extends Authenticatable
// {
//     use HasFactory, HasApiTokens;

//     protected $fillable = [
//         'firstName',
//         'lastName',
//         'phone',
//         'email',
//         'password',
//     ];
// }

