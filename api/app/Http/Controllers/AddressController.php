<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Address;

class AddressController extends Controller
{
    protected function setAddress($data)
    {
        $address_data = [
            'zipcode'      => $data['zipcode'],
            'street'       => $data['street'],
            'neighborhood' => $data['neighborhood'],
            'complement'   => $data['complement'],
            'number'       => $data['number'],
        ];
        $address = Address::firstOrCreate($address_data);
        return $address;
    }
}
