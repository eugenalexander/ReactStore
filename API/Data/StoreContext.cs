using System;
using API.Entities;
using API.Entities.OrderAggregate;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class StoreContext(DbContextOptions options) : IdentityDbContext<User>(options)
{
    public required DbSet<Product> Products { get; set; }

    public required DbSet<Basket> Baskets { get; set; }
    public required DbSet<Order> Orders { get; set; }


    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        builder.Entity<IdentityRole>()
        .HasData(
            new IdentityRole { Id = "dc4d9c95-3edd-4c3f-8165-f31a83e999d6", Name = "Member", NormalizedName = "MEMBER" },
            new IdentityRole { Id = "d4540792-e608-4774-bad8-35cd9fbec496", Name = "Admin", NormalizedName = "ADMIN" }
        );
    }
    
}
