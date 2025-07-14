using System;

namespace API.Entities;

public class StripeSettings
{
    public required string PublishableKey { get; set; }
    public required string SecretKey { get; set; }
}
