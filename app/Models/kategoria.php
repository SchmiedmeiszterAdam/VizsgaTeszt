<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class kategoria extends Model
{
    protected $table='kategoria';
    protected $primaryKey='id';
    protected $fillable=[
        'nev'
    ];
    use HasFactory;
}
