<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'lastname',
        'birthdate',
        'city',
        'country',
        'phone',
        'profession',
        'about',
        'picture',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];
    public function technologies(): HasMany
    {
        return $this->hasMany(Technology::class);
    }
    public function projects(): HasMany
    {
        return $this->hasMany(Project::class);
    }
    public function studies(): HasMany
    {
        return $this->hasMany(Study::class);
    }
    public function complementaryStudies(): HasMany
    {
        return $this->hasMany(ComplementaryStudy::class);
    }
    public function languages(): HasMany{
        return $this->hasMany(Language::class);
    }
}
