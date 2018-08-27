<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Person extends Model
{
    protected $fillable = [
        'name'      ,
        'email'     ,
        'telephone' ,
        'mobile'    ,
        'contact'   ,
        'birth_date',
        'address_id',
    ];

    public function address()
    {
        return $this->hasOne(\App\Models\Address::class, 'id', 'address_id');
    }
}
