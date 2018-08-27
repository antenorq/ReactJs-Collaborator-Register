<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Request as PersonRequest;

class RequestController extends AddressController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $person_requests = PersonRequest::all();
        return $person_requests;
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
            $person_request = new PersonRequest;
            $person_request->fill($data);
            $person_request->address_id = $address->id;
            $person_request->save();
            return response($person_request, 201);
            \DB::commit();
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
        //
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
            $person_request = PersonRequest::findOrFail($id);
            $person_request->fill($data);
            $person_request->address_id = $address->id;
            $person_request->save();
            return $person_request;
            \DB::commit();
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
        //
    }
}
