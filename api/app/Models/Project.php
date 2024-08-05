<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Project extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'description', 'start_year', 'end_year', 'archived', 'user_id'];

    public function user():BelongsTo{
        return $this->belongsTo(User::class);
    }

    public function images():HasMany{
        return $this->hasMany(ProjectImage::class);
    }
}
