<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

use App\Models\Person;
use App\Models\Address;

class CollaboratorTest extends TestCase
{

    use RefreshDatabase;

    public function setUp()
    {
        parent::setUp();
        // factory(\App\Models\Person::class)->create();
    }

    /**
     * A basic test example.
     *
     * @return void
     */
    public function testListPeople()
    {
        $response = $this->json('GET', '/people');
        $response->assertStatus(200);
    }

    public function testCreatePerson()
    {
        $data = [
            'name' => 'George Moura',
            'email' => 'gwmoura@gmail.com',
            'telephone' => '7133218664',
            'mobile' => '71987886089',
            'contact' => '',
            'birth_date' => '14/05/1990',
            'zipcode' => '41710-020',
            'street' => 'Rua Lavínia Magalhães',
            'neighborhood' => 'Boca do Rio',
            'complement' => '',
            'number' => '100'
        ];
        $response = $this->json('POST', '/people', $data);
        $response->assertStatus(201)
                ->assertJson(["name" => "George Moura"]);

        $this->assertEquals(1, Address::count());

        $person = Person::first();
        $this->assertEquals($person->address->zipcode, '41710-020');
        $this->assertEquals($person->email, 'gwmoura@gmail.com');
    }
}
