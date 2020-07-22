@extends('layouts.app')


@section('content')

<div class="w-full max-h-full grid grid-cols-3 justify-items-center">
    
    @include('home._form-login')

</div>

@endsection
@push('script')
@endpush
{{-- @push('styles')
    <link rel="stylesheet" href="{{ mix('css/home.css') }}">
@endpush --}}