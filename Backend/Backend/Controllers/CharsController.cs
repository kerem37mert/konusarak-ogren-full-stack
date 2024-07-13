
using Backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CharsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public CharsController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Chars>>> Get()
        {
            var chars = await _context.Chars.ToListAsync();
            return Ok(chars);
        }
    }
}
