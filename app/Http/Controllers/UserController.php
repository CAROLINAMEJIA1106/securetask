<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Spatie\Permission\Models\Role;


class UserController extends Controller
{
    public function index()
    {
        if (!Auth::user()->hasRole('Administrador')) {
            abort(403);
        }

        $users = User::with('roles')->get();
        $roles = Role::all();

        return Inertia::render('Users/Index', [
            'users' => $users,
            'roles' => $roles
        ]);
    }

    public function updateRole(Request $request, User $user)
    {
        $request->validate([
            'role' => 'required|exists:roles,name'
        ]);

        // eliminar roles actuales
        $user->syncRoles([$request->role]);

        return redirect()->back();
    }
}