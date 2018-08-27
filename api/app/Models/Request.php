<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Request extends Model
{
    protected $fillable = [
        'person_id'   ,
        'request_date',
        'description' ,
        'address_id',
    ];

    public function address()
    {
        return $this->hasOne(\App\Models\Address::class, 'id', 'address_id');
    }
}
