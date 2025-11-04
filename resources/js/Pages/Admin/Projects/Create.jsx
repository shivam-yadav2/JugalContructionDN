import React, { useState } from 'react';
import { Link, useForm } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import { ArrowLeft, Upload, X } from 'lucide-react';

export default function CreateProject() {
    const { data, setData, post, processing, errors } = useForm({
        category: 'residential',
        name: '',
        title: '',
        short_description: '',
        long_description: '',
        location: '',
        link: '',
        map_embed_code: '',
        youtube_video_link: '',
        rera_details: '',
        property_images: [],
        property_videos: [],
        construction_images: [],
        show_rera_section: true,
        show_construction_images: true,
        show_property_images: true,
        show_property_videos: true,
        show_amenities: true,
        is_active: true,
        order: 0,
    });

    const [propertyImagePreviews, setPropertyImagePreviews] = useState([]);
    const [constructionImagePreviews, setConstructionImagePreviews] = useState([]);
    const [propertyVideoPreviews, setPropertyVideoPreviews] = useState([]);

    const handleImageChange = (e, type) => {
        const files = Array.from(e.target.files);
        const newFiles = files.map(file => {
            const reader = new FileReader();
            reader.onloadend = () => {
                if (type === 'property_images') {
                    setPropertyImagePreviews(prev => [...prev, reader.result]);
                } else if (type === 'construction_images') {
                    setConstructionImagePreviews(prev => [...prev, reader.result]);
                }
            };
            reader.readAsDataURL(file);
            return file;
        });

        if (type === 'property_images') {
            setData('property_images', [...data.property_images, ...newFiles]);
        } else if (type === 'construction_images') {
            setData('construction_images', [...data.construction_images, ...newFiles]);
        }
    };

    const handleVideoChange = (e) => {
        const files = Array.from(e.target.files);
        setData('property_videos', [...data.property_videos, ...files]);
        files.forEach(file => {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPropertyVideoPreviews(prev => [...prev, reader.result]);
            };
            reader.readAsDataURL(file);
        });
    };

    const removeImage = (index, type) => {
        if (type === 'property_images') {
            const newImages = data.property_images.filter((_, i) => i !== index);
            setData('property_images', newImages);
            setPropertyImagePreviews(prev => prev.filter((_, i) => i !== index));
        } else if (type === 'construction_images') {
            const newImages = data.construction_images.filter((_, i) => i !== index);
            setData('construction_images', newImages);
            setConstructionImagePreviews(prev => prev.filter((_, i) => i !== index));
        }
    };

    const removeVideo = (index) => {
        const newVideos = data.property_videos.filter((_, i) => i !== index);
        setData('property_videos', newVideos);
        setPropertyVideoPreviews(prev => prev.filter((_, i) => i !== index));
    };

    const submit = (e) => {
        e.preventDefault();
        post('/admin/projects', {
            forceFormData: true,
        });
    };

    return (
        <AdminLayout>
            <div className="p-6">
                <div className="flex items-center gap-4 mb-6">
                    <Link
                        href="/admin/projects"
                        className="text-gray-600 hover:text-gray-900"
                    >
                        <ArrowLeft size={24} />
                    </Link>
                    <h1 className="text-3xl font-bold">Create New Project</h1>
                </div>

                <form onSubmit={submit} className="bg-white rounded-lg shadow p-6 space-y-6">
                    {/* Basic Information */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold border-b pb-2">Basic Information</h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Category <span className="text-red-500">*</span>
                                </label>
                                <select
                                    value={data.category}
                                    onChange={(e) => setData('category', e.target.value)}
                                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-[#ebd2a0] focus:ring-[#ebd2a0]"
                                    required
                                >
                                    <option value="residential">Residential</option>
                                    <option value="commercial">Commercial</option>
                                </select>
                                {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-[#ebd2a0] focus:ring-[#ebd2a0]"
                                    required
                                />
                                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Title <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    value={data.title}
                                    onChange={(e) => setData('title', e.target.value)}
                                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-[#ebd2a0] focus:ring-[#ebd2a0]"
                                    required
                                />
                                {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Location
                                </label>
                                <input
                                    type="text"
                                    value={data.location}
                                    onChange={(e) => setData('location', e.target.value)}
                                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-[#ebd2a0] focus:ring-[#ebd2a0]"
                                />
                                {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Short Description
                            </label>
                            <textarea
                                value={data.short_description}
                                onChange={(e) => setData('short_description', e.target.value)}
                                rows="3"
                                className="w-full border-gray-300 rounded-md shadow-sm focus:border-[#ebd2a0] focus:ring-[#ebd2a0]"
                            />
                            {errors.short_description && <p className="text-red-500 text-sm mt-1">{errors.short_description}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Long Description
                            </label>
                            <textarea
                                value={data.long_description}
                                onChange={(e) => setData('long_description', e.target.value)}
                                rows="6"
                                className="w-full border-gray-300 rounded-md shadow-sm focus:border-[#ebd2a0] focus:ring-[#ebd2a0]"
                            />
                            {errors.long_description && <p className="text-red-500 text-sm mt-1">{errors.long_description}</p>}
                        </div>
                    </div>

                    {/* Links & Media */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold border-b pb-2">Links & Media</h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Project Link
                                </label>
                                <input
                                    type="url"
                                    value={data.link}
                                    onChange={(e) => setData('link', e.target.value)}
                                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-[#ebd2a0] focus:ring-[#ebd2a0]"
                                />
                                {errors.link && <p className="text-red-500 text-sm mt-1">{errors.link}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    YouTube Video Link
                                </label>
                                <input
                                    type="url"
                                    value={data.youtube_video_link}
                                    onChange={(e) => setData('youtube_video_link', e.target.value)}
                                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-[#ebd2a0] focus:ring-[#ebd2a0]"
                                />
                                {errors.youtube_video_link && <p className="text-red-500 text-sm mt-1">{errors.youtube_video_link}</p>}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Map Embed Code
                            </label>
                            <textarea
                                value={data.map_embed_code}
                                onChange={(e) => setData('map_embed_code', e.target.value)}
                                rows="3"
                                className="w-full border-gray-300 rounded-md shadow-sm focus:border-[#ebd2a0] focus:ring-[#ebd2a0]"
                                placeholder="Paste your map embed code here"
                            />
                            {errors.map_embed_code && <p className="text-red-500 text-sm mt-1">{errors.map_embed_code}</p>}
                        </div>
                    </div>

                    {/* Images & Videos */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold border-b pb-2">Images & Videos</h2>
                        
                        {/* Property Images */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Property Images
                            </label>
                            <input
                                type="file"
                                multiple
                                accept="image/*"
                                onChange={(e) => handleImageChange(e, 'property_images')}
                                className="w-full border-gray-300 rounded-md shadow-sm focus:border-[#ebd2a0] focus:ring-[#ebd2a0]"
                            />
                            {propertyImagePreviews.length > 0 && (
                                <div className="grid grid-cols-4 gap-4 mt-4">
                                    {propertyImagePreviews.map((preview, index) => (
                                        <div key={index} className="relative">
                                            <img src={preview} alt={`Preview ${index + 1}`} className="w-full h-32 object-cover rounded" />
                                            <button
                                                type="button"
                                                onClick={() => removeImage(index, 'property_images')}
                                                className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1"
                                            >
                                                <X size={16} />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Construction Images */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Construction Images
                            </label>
                            <input
                                type="file"
                                multiple
                                accept="image/*"
                                onChange={(e) => handleImageChange(e, 'construction_images')}
                                className="w-full border-gray-300 rounded-md shadow-sm focus:border-[#ebd2a0] focus:ring-[#ebd2a0]"
                            />
                            {constructionImagePreviews.length > 0 && (
                                <div className="grid grid-cols-4 gap-4 mt-4">
                                    {constructionImagePreviews.map((preview, index) => (
                                        <div key={index} className="relative">
                                            <img src={preview} alt={`Preview ${index + 1}`} className="w-full h-32 object-cover rounded" />
                                            <button
                                                type="button"
                                                onClick={() => removeImage(index, 'construction_images')}
                                                className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1"
                                            >
                                                <X size={16} />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Property Videos */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Property Videos
                            </label>
                            <input
                                type="file"
                                multiple
                                accept="video/*"
                                onChange={handleVideoChange}
                                className="w-full border-gray-300 rounded-md shadow-sm focus:border-[#ebd2a0] focus:ring-[#ebd2a0]"
                            />
                            {propertyVideoPreviews.length > 0 && (
                                <div className="grid grid-cols-4 gap-4 mt-4">
                                    {propertyVideoPreviews.map((preview, index) => (
                                        <div key={index} className="relative">
                                            <video src={preview} className="w-full h-32 object-cover rounded" controls />
                                            <button
                                                type="button"
                                                onClick={() => removeVideo(index)}
                                                className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1"
                                            >
                                                <X size={16} />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* RERA Details */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold border-b pb-2">RERA Details</h2>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                RERA Details
                            </label>
                            <textarea
                                value={data.rera_details}
                                onChange={(e) => setData('rera_details', e.target.value)}
                                rows="6"
                                className="w-full border-gray-300 rounded-md shadow-sm focus:border-[#ebd2a0] focus:ring-[#ebd2a0]"
                            />
                            {errors.rera_details && <p className="text-red-500 text-sm mt-1">{errors.rera_details}</p>}
                        </div>
                    </div>

                    {/* Visibility Settings */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold border-b pb-2">Visibility Settings</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    checked={data.show_rera_section}
                                    onChange={(e) => setData('show_rera_section', e.target.checked)}
                                    className="mr-2"
                                />
                                <span className="text-sm text-gray-700">Show RERA Section</span>
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    checked={data.show_construction_images}
                                    onChange={(e) => setData('show_construction_images', e.target.checked)}
                                    className="mr-2"
                                />
                                <span className="text-sm text-gray-700">Show Construction Images</span>
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    checked={data.show_property_images}
                                    onChange={(e) => setData('show_property_images', e.target.checked)}
                                    className="mr-2"
                                />
                                <span className="text-sm text-gray-700">Show Property Images</span>
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    checked={data.show_property_videos}
                                    onChange={(e) => setData('show_property_videos', e.target.checked)}
                                    className="mr-2"
                                />
                                <span className="text-sm text-gray-700">Show Property Videos</span>
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    checked={data.show_amenities}
                                    onChange={(e) => setData('show_amenities', e.target.checked)}
                                    className="mr-2"
                                />
                                <span className="text-sm text-gray-700">Show Amenities</span>
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    checked={data.is_active}
                                    onChange={(e) => setData('is_active', e.target.checked)}
                                    className="mr-2"
                                />
                                <span className="text-sm text-gray-700">Active</span>
                            </label>
                        </div>
                    </div>

                    {/* Order */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Display Order
                        </label>
                        <input
                            type="number"
                            value={data.order}
                            onChange={(e) => setData('order', parseInt(e.target.value))}
                            className="w-full border-gray-300 rounded-md shadow-sm focus:border-[#ebd2a0] focus:ring-[#ebd2a0]"
                            min="0"
                        />
                    </div>

                    {/* Submit Buttons */}
                    <div className="flex gap-4 pt-4 border-t">
                        <button
                            type="submit"
                            disabled={processing}
                            className="bg-[#ebd2a0] hover:bg-[#d1a260] text-[#2D1C11] px-6 py-2 rounded-lg font-medium transition-colors disabled:opacity-50"
                        >
                            {processing ? 'Creating...' : 'Create Project'}
                        </button>
                        <Link
                            href="/admin/projects"
                            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded-lg font-medium transition-colors"
                        >
                            Cancel
                        </Link>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}

