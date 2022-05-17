<?php

namespace App\Http\Controllers;

use App\Models\kategoria;
use App\Models\teszt;
use Illuminate\Http\Request;

class TesztController extends Controller
{
    public function index()
    {
        return response()->json(teszt::with('kategoria')->get());
    }
}
