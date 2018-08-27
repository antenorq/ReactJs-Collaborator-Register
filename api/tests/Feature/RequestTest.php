<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

use App\Models\Request;
use App\Models\Address;

class RequestTest extends TestCase
{
    use RefreshDatabase;

    /**
     * A basic test example.
     *
     * @return void
     */
    public function testListRequests()
    {
        $response = $this->json('GET', '/requests');

        $response->assertStatus(200)
                ->assertJson([]);
    }


    public function testCreateRequest()
    {
        $data = [
            'person_id' => 1,
            'request_date' => '10/04/2018',
            'description' => 'Iluminação da rua',
            'zipcode' => '41710-020',
            'street' => 'Rua Lavínia Magalhães',
            'neighborhood' => 'Boca do Rio',
            'complement' => '',
            'number' => '100'
        ];
        $response = $this->json('POST', '/requests', $data);
        $response->assertStatus(201);

        $this->assertEquals(1, Request::count());
        $this->assertEquals(1, Address::count());
        $request = Request::first();
        $this->assertEquals('Boca do Rio', $request->address->neighborhood);
    }
}
