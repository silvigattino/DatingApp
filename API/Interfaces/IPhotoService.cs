using API.Helpers;
using API.Services;
using CloudinaryDotNet;
using CloudinaryDotNet.Actions;
using Microsoft.Extensions.Options;

namespace API.Interfaces
{
    public interface IPhotoService
    {        
        Task<ImageUploadResult>AddPhotoAsync(IFormFile file);

        Task<DeletionResult> DeletePhotoAsync(string publicId);
    }
}