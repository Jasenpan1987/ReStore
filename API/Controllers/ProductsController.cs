using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiControllerAttribute]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        public StoreContext _ctx { get; }
        
        public ProductsController(StoreContext ctx)
        {
            _ctx = ctx;
        }

        [HttpGet]
        public async Task<ActionResult<List<Product>>> GetProducts()
        {
            return await _ctx.Products.ToListAsync();
        }

        [HttpGet("{id}")] // api/products/2
        public async Task<ActionResult<Product>> GetProduct(int id)
        {
            return await _ctx.Products.FindAsync(id);
        }
    }
}