<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    protected $fillable = [
        'zipcode'     ,
        'street'      ,
        'neighborhood',
        'complement'  ,
        'number'      ,
    ];

    public function people()
    {
        return $this->hasMany('App\Models\Person');
    }

    public function requests()
    {
        return $this->hasMany('App\Models\Request');
    }
}
