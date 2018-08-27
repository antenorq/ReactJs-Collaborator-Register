<?php

use Faker\Generator as Faker;

$factory->define(App\Models\People::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->email,
        'telephone' => $faker->phoneNumber,
        'mobile' => $faker->cellphone,
        'contact' => '',
        'birth_date' => '14/05/1990',
        'zipcode' => $faker->postcode,
        'street' => $faker->streetName,
        'neighborhood' => $faker->secondaryAddress,
        'complement' => '',
        'number' => $faker->buildingNumber
    ];
});
