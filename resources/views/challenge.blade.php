<!DOCTYPE html>
<html lang="fa" dir="rtl">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="چالش ابر آروان برای توسعه‌دهنده وب تیم مارکتینگ">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">

    <title>چالش ابر آروان</title>
</head>

<body>
    @include('sections.intro')
    @include('sections.projects')
    @include('sections.meetings')
    @include('sections.form')
    @include('sections.market')
    @include('sections.success')

    <script src="{{ asset('js/app.js') }}"></script>
</body>

</html>
