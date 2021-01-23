using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CourseManagementSystem.Models;
using CourseManagementSystem.Data;

namespace CourseManagementSystem.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class AssigmentController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public AssigmentController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Assigment
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Assigment>>> GetAssigments()
        {
            return await _context.Assigments.ToListAsync();
        }

        // GET: api/Assigment/5
        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<Assigment>>> GetAssigments(int id)
        {
            var assigments =   await _context.Assigments.Where(e => e.CourseId == id).ToListAsync();

            if (assigments == null)
            {
                return NotFound();
            }

            return assigments;
        }

        // POST: api/Assigment
        [HttpPost]
        public async Task<ActionResult<Assigment>> PostCourse(Assigment assigment)
        {
            assigment.CreationDate = DateTime.Now;
            assigment.DueDate = DateTime.Now.AddDays(7);
            _context.Assigments.Add(assigment);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (AssigmentExists(assigment.AssigmentId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetAssigments", new { id = assigment.AssigmentId }, assigment);
        }

        // DELETE: api/Assigment/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Assigment>> DeleteAssigment(int id)
        {
            var assigment = await _context.Assigments.FindAsync(id);
            if (assigment == null)
            {
                return NotFound();
            }

            _context.Assigments.Remove(assigment);
            await _context.SaveChangesAsync();

            return assigment;
        }

        private bool AssigmentExists(int id)
        {
            return _context.Assigments.Any(e => e.AssigmentId == id);
        }
    }
}