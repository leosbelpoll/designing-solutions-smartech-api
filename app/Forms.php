<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Forms extends Model
{
    protected $table = 'forms';
    protected $fillable = array(
        'dangerous',
        'organics',
        'plastics',
        'others',
        'noPlaque',
        'initialTravel',
        'endTravel',
        'purchasedGallons',
        'description'
    );
}
