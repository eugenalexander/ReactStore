using System;
using Microsoft.EntityFrameworkCore;

namespace API.Entities.OrderAggregate;

[Owned]
public class ProductItemOrdered
{
    public int ProductId { get; set; }
    public required string Name { get; set; }
    public required string PrictureUrl { get; set; }
}
