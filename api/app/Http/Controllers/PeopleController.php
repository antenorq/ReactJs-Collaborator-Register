<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Person;

class PeopleController extends AddressController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $people = Person::all();
        return $people;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->all();
        \DB::beginTransaction();
        try{
            $address = $this->setAddress($data);
            $person = new Person;
            $person->fill($data);
            $person->address_id = $address->id;
            $person->save();
            return response($person, 201);
        }catch(\Exception $e){
            \DB::rollback();
            \Log::error($e);
            $content = json_encode([
                'message' => $e->getMessage()
            ]);
            return response($content, 400);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $person = Person::findOrFail($id);
        return $person;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $data = $request->all();
        \DB::beginTransaction();
        try{
            $address = $this->setAddress($data);
            $person = Person::findOrFail($id);
            $person->fill($data);
            $person->address_id = $address->id;
            $person->save();
            return $person;
        }catch(\Exception $e){
            \DB::rollback();
            \Log::error($e);
            $content = json_encode([
                'message' => $e->getMessage()
            ]);
            return response($content, 400);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $person = Person::findOrFail($id);
        $person->delete();
        return $person;
    }
}
