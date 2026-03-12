<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TaskController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\UserController;
use App\Models\Task;
use App\Models\User;

//Carga la página de bienvenida-react
Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});


//Solo permite acceder a dashboard a usuarios autenticados y verificados
//Enviamos las estadísticas de tareas y usuarios para mostrar en el dashboard
Route::get('/dashboard', function () {

    return Inertia::render('Dashboard', [

        'stats' => [
            'tasks' => Task::count(),
            'pending' => Task::where('status','pending')->count(),
            'completed' => Task::where('status','completed')->count(),
            'users' => User::count()
        ]

    ]);

})->middleware(['auth', 'verified'])->name('dashboard');


//Agrupamos las rutas de tareas y perfil para que solo los usuarios autenticados puedan acceder a ellas
Route::middleware('auth')->group(function () {
    
    // Rutas del CRUD de tareas
    Route::resource('tasks', TaskController::class);
    Route::get('/users', [UserController::class, 'index']);
    Route::put('/users/{user}/role', [UserController::class, 'updateRole'])
    ->name('users.updateRole')
    ->middleware('role:Administrador');

    // Rutas para editar, actualizar y eliminar el perfil del usuario
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Carga las rutas de autenticación (login, register, etc.)    
require __DIR__.'/auth.php';
