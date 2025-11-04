import React from 'react';
import { Link, router } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Plus, Edit, Trash2, Eye } from 'lucide-react';

export default function ProjectsIndex({ projects }) {
    const handleDelete = (project) => {
        if (confirm(`Are you sure you want to delete ${project.name}?`)) {
            router.delete(`/admin/projects/${project.id}`, {
                preserveScroll: true,
            });
        }
    };

    const toggleStatus = (project) => {
        router.put(`/admin/projects/${project.id}`, {
            ...project,
            is_active: !project.is_active,
        }, {
            preserveScroll: true,
            only: ['projects'],
        });
    };

    return (
        <AdminLayout>
            <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold">Projects</h1>
                    <Link
                        href="/admin/projects/create"
                        className="flex items-center gap-2 bg-[#ebd2a0] hover:bg-[#d1a260] text-[#2D1C11] px-4 py-2 rounded-lg transition-colors"
                    >
                        <Plus size={20} />
                        <span>Add New Project</span>
                    </Link>
                </div>

                <div className="bg-white rounded-lg shadow overflow-hidden">
                    {projects.length > 0 ? (
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order</th>
                                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {projects.map((project) => (
                                        <tr key={project.id}>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm font-medium text-gray-900">{project.name}</div>
                                                <div className="text-sm text-gray-500">{project.title}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800 capitalize">
                                                    {project.category}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {project.location || 'N/A'}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <button
                                                    onClick={() => toggleStatus(project)}
                                                    className={`px-2 py-1 text-xs font-semibold rounded-full ${
                                                        project.is_active
                                                            ? 'bg-green-100 text-green-800'
                                                            : 'bg-red-100 text-red-800'
                                                    }`}
                                                >
                                                    {project.is_active ? 'Active' : 'Inactive'}
                                                </button>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {project.order}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <div className="flex justify-end gap-2">
                                                    <Link
                                                        href={`/admin/projects/${project.id}`}
                                                        className="text-blue-600 hover:text-blue-900 p-1"
                                                    >
                                                        <Eye size={18} />
                                                    </Link>
                                                    <Link
                                                        href={`/admin/projects/${project.id}/edit`}
                                                        className="text-indigo-600 hover:text-indigo-900 p-1"
                                                    >
                                                        <Edit size={18} />
                                                    </Link>
                                                    <button
                                                        onClick={() => handleDelete(project)}
                                                        className="text-red-600 hover:text-red-900 p-1"
                                                    >
                                                        <Trash2 size={18} />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className="p-12 text-center">
                            <p className="text-gray-500 text-lg">No projects found.</p>
                            <Link
                                href="/admin/projects/create"
                                className="mt-4 inline-flex items-center gap-2 text-[#ebd2a0] hover:text-[#d1a260]"
                            >
                                <Plus size={20} />
                                <span>Create your first project</span>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </AdminLayout>
    );
}

