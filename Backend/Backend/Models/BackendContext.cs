﻿
using Microsoft.EntityFrameworkCore;

namespace Backend.Models
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Episode> Episodes { get; set; }
        public DbSet<Chars> Chars { get; set; }
    }
}
