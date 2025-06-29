'use client';

import { useState } from 'react';

// 待办事项数据类型
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}



export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: '学习React基础', completed: true },
    { id: 2, text: '完成TodoList项目', completed: false },
    { id: 3, text: '掌握状态管理', completed: false }
  ]);

  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, {
        id: Date.now(),
        text: newTodo.trim(),
        completed: false
      }]);
      setNewTodo('');
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* 练习说明 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            练习07：待办事项列表
          </h1>
          <p className="text-gray-600 mb-4">
            完整的TodoList应用，支持增删改查功能。
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">React</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">useState</span>
            <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">useEffect</span>
          </div>
        </div>

        {/* TodoList 应用 */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4">我的待办清单</h3>
          
          {/* 添加新项目 */}
          <div className="flex mb-6">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="添加新的待办事项..."
              className="flex-1 px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onKeyPress={(e) => e.key === 'Enter' && addTodo()}
            />
            <button
              onClick={addTodo}
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-r-md"
            >
              添加
            </button>
          </div>

          {/* 待办事项列表 */}
          <div className="space-y-2">
            {todos.map(todo => (
              <div
                key={todo.id}
                className={`flex items-center p-3 border rounded-lg ${
                  todo.completed ? 'bg-gray-50' : 'bg-white'
                }`}
              >
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                  className="mr-3"
                />
                <span className={`flex-1 ${
                  todo.completed ? 'line-through text-gray-500' : ''
                }`}>
                  {todo.text}
                </span>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white text-sm rounded"
                >
                  删除
                </button>
              </div>
            ))}
          </div>

          {/* 统计信息 */}
          <div className="mt-6 p-4 bg-gray-100 rounded-lg">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600">{todos.length}</div>
                <div className="text-sm text-gray-600">总计</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">
                  {todos.filter(t => t.completed).length}
                </div>
                <div className="text-sm text-gray-600">已完成</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-600">
                  {todos.filter(t => !t.completed).length}
                </div>
                <div className="text-sm text-gray-600">待完成</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 