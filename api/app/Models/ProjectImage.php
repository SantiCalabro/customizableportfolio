<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ProjectImage extends Model
{
    use HasFactory;
    
    protected $fillable = ['path', 'caption', 'project_id'];

    public function project():BelongsTo{
        return $this->belongsTo(Project::class);
    }
}
