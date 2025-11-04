import React from 'react';
import AdminLayout from '@/Layouts/AdminLayout';

export default function Dashboard({ stats, recentProjects }) {
    return (
        <AdminLayout>
            <div className="p-6">
                <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
                
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-8">
                    <div className="bg-white rounded-lg shadow p-6">
                        <h3 className="text-gray-500 text-sm font-medium">Total Projects</h3>
                        <p className="text-3xl font-bold text-gray-900 mt-2">{stats.total_projects}</p>
                        <p className="text-sm text-gray-500 mt-1">{stats.active_projects} active</p>
                    </div>
                    
                    <div className="bg-white rounded-lg shadow p-6">
                        <h3 className="text-gray-500 text-sm font-medium">Total Careers</h3>
                        <p className="text-3xl font-bold text-gray-900 mt-2">{stats.total_careers}</p>
                        <p className="text-sm text-gray-500 mt-1">{stats.active_careers} active</p>
                    </div>
                    
                    <div className="bg-white rounded-lg shadow p-6">
                        <h3 className="text-gray-500 text-sm font-medium">Total Sliders</h3>
                        <p className="text-3xl font-bold text-gray-900 mt-2">{stats.total_sliders}</p>
                        <p className="text-sm text-gray-500 mt-1">{stats.active_sliders} active</p>
                    </div>
                    
                    <div className="bg-white rounded-lg shadow p-6">
                        <h3 className="text-gray-500 text-sm font-medium">Contact Details</h3>
                        <p className="text-3xl font-bold text-gray-900 mt-2">{stats.contact_details}</p>
                    </div>
                    
                    <div className="bg-white rounded-lg shadow p-6">
                        <h3 className="text-gray-500 text-sm font-medium">Total Enquiries</h3>
                        <p className="text-3xl font-bold text-gray-900 mt-2">{stats.total_enquiries}</p>
                        {stats.unread_enquiries > 0 && (
                            <p className="text-sm text-red-500 mt-1">{stats.unread_enquiries} unread</p>
                        )}
                    </div>
                </div>

                {/* Recent Projects */}
                <div className="bg-white rounded-lg shadow p-6">
                    <h2 className="text-xl font-bold mb-4">Recent Projects</h2>
                    {recentProjects.length > 0 ? (
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {recentProjects.map((project) => (
                                        <tr key={project.id}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{project.name}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 capitalize">{project.category}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${project.is_active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                                    {project.is_active ? 'Active' : 'Inactive'}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {new Date(project.created_at).toLocaleDateString()}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <p className="text-gray-500">No projects yet. Create your first project!</p>
                    )}
                </div>
            </div>
        </AdminLayout>
    );
}

