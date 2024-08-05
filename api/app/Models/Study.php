<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Study extends Model
{
    use HasFactory;
    protected $fillable = [
    'degree',
    'academy',
    'description',
    'start_year',
    'end_year',
    'user_id'
    ];
    
    public function user():BelongsTo{ 
        return $this->belongsTo(User::class);
    }

}
