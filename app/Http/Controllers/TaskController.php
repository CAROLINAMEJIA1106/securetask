<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    //Traemos solo usuario logueado
    //Se permite para todos los roles
    public function index()
    {
        $tasks = Task::with('user')
            ->latest()
            ->get();

        return Inertia::render('Tasks/Index', [
            'tasks' => $tasks
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    
    //Se permite para roles Administrador y Editor 
    public function create()
    {
        if(!auth()->user()->hasRole(['Administrador','Editor'])){
            abort(403);
        }

        return Inertia::render('Tasks/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    //Se permite para roles Administrador y Editor
    public function store(Request $request)
    {
        if(!auth()->user()->hasRole(['Administrador','Editor'])){
            abort(403);
        }

        $request->validate([
            'title' => 'required|max:255',
            'description' => 'nullable'
        ]);

        Task::create([
            'title' => $request->title,
            'description' => $request->description,
            'user_id' => auth()->id()
        ]);

        return redirect()->route('tasks.index');
    }

    /**
     * Display the specified resource.
     */
    //Se permite para todos los roles
    public function show(Task $task)
    {
        $task->load('user.roles');

        return Inertia::render('Tasks/Show', [
            'task' => $task
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    //Se permite para roles Administrador y Editor
    public function edit(Task $task)
    {
        if(!auth()->user()->hasRole(['Administrador','Editor'])){
            abort(403);
        }

        return Inertia::render('Tasks/Edit', [
            'task'=>$task
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    //Se permite para roles Administrador y Editor
    public function update(Request $request, Task $task)
    {
        if(!auth()->user()->hasRole(['Administrador','Editor'])){
            abort(403);
        }

        $request->validate([
            'title' => 'required|max:255',
            'description' => 'nullable',
            'status' => 'required|in:pending,completed,cancelled'
        ]);

        $task->update($request->only('title','description','status'));

        return redirect()->route('tasks.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    //Se permite para roles Administrador y Editor
    public function destroy(Task $task)
    {
        if(!auth()->user()->hasRole(['Administrador','Editor'])){
            abort(403);
        }

        $task->delete();

        return redirect()->route('tasks.index');
    }
}
